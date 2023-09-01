import React from "react";
export const generateUniqueIdForBlock=()=> {
    let str = 'abcdeABCDEFGHIJKfghijklmnopqrstuvwxyzLMNOPQRSTUVWXYZ0123456789';
    let char = '',
        genID = '';

    while(genID.length < 8) {
        char = new Date().getSeconds()+str.charAt(Math.floor(Math.random() * str.length));
        genID += char;
    }
    return genID;
}
