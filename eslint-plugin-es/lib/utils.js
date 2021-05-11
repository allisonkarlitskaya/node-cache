/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const {
    CALL,
    CONSTRUCT,
    PatternMatcher,
    ReferenceTracker,
    getStringIfConstant,
} = require("eslint-utils")

module.exports = {
    /**
     * Define generator to search pattern.
     * The iterator generated by the generator returns the start and end index of the match.
     * @param {RegExp} pattern Base pattern
     * @returns {function(string):IterableIterator<RegExpExecArray>} generator
     */
    definePatternSearchGenerator(pattern) {
        const matcher = new PatternMatcher(pattern)
        return matcher.execAll.bind(matcher)
    },

    /**
     * Check whether a given token is a comma token or not.
     * @param {Token} token The token to check.
     * @returns {boolean} `true` if the token is a comma token.
     */
    isCommaToken(token) {
        return (
            token != null && token.type === "Punctuator" && token.value === ","
        )
    },

    /**
     * Iterate the calls of the `RegExp` global variable.
     * @param {Scope} globalScope The global scope object.
     * @returns {IterableIterator<{node:Node,pattern:(string|null),flags:(string|null)}>} The iterator of `CallExpression` or `NewExpression` for `RegExp`.
     */
    *getRegExpCalls(globalScope) {
        const tracker = new ReferenceTracker(globalScope)
        for (const { node } of tracker.iterateGlobalReferences({
            RegExp: { [CALL]: true, [CONSTRUCT]: true },
        })) {
            const [patternNode, flagsNode] = node.arguments
            yield {
                node,
                pattern: getStringIfConstant(patternNode, globalScope),
                flags: getStringIfConstant(flagsNode, globalScope),
            }
        }
    },
}
