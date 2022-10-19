import React from "react";
export declare enum ToolbarOptions {
    fontStyle = 0,
    quoteCode = 1,
    headers = 2,
    list = 3,
    indentation = 4,
    font = 5,
    script = 6,
    align = 7,
    clear = 8,
    image = 9
}
export declare const buildContainer: (options: ToolbarOptions[] | null, AddEmbedHandler: React.FC<{
    onFinish: (embedObject: Object) => void;
}> | null) => (Object | string[])[];
