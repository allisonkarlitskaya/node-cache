export declare const amSuffix = " AM";
export declare const pmSuffix = " PM";
export declare const makeTimeOptions: (stepMinutes: number, hour12: boolean, delimiter: string) => string[];
export declare const parseTime: (time: string, timeRegex: RegExp, delimiter: string, is12Hour: boolean) => string;
export declare const validateTime: (time: string, timeRegex: RegExp, delimiter: string, is12Hour: boolean) => boolean;
//# sourceMappingURL=TimePickerUtils.d.ts.map