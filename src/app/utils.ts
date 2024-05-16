import { useRouter, useSearchParams } from "next/navigation";
import { PartialActorResponseItem } from "./type";

export const toNumber = (value: string) => {
    return isNaN(Number(value)) ? 0 : Number(value);
};


export const isAUrl = (value: string) => {
    return value.startsWith('https');
}


export const getFirstWords = (text: string, wordCount?: number) => {

    if (!wordCount) {
        return text;
    }

    const textArray = text.trim().split(" ").slice(0, wordCount);

    if (textArray.length <= 50) {
        return textArray.join(" ");
    }

    return textArray.slice(0, -1).join(" ") + " ...";
};

export const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("");
}

export const mapActorDetails = (item: PartialActorResponseItem, matchingValue: string) => {

    const summary = item.description || item.summary || item.additional_details || "";
    const matchingParagraph = getFirstMatchingParagraph(summary, matchingValue);
    const first30WordsInSummary = getFirstWords(matchingParagraph, 30);

    return {
        name: item.user.name,
        summary: first30WordsInSummary,
        pictureSource: item.user.picture_large,
        nameInitials: getInitials(item.user.name),
        username: item.user.username,
        headline: getFirstWords(item.headline || "", 10),
        track: {
            title: item.relevant_sample.name,
            src: item.relevant_sample.file,
            author: item.user.name,
        }
    }
}


export const getFirstMatchingParagraph = (text: string, matchingValue: string) => {
    const paragraph = text.toLowerCase()
        .split("\n")
        .find((p) => p.includes(matchingValue) && p !== "");

    return paragraph || "";
}


export const useSafeRouter = () => {
    try {
        return useRouter()
    } catch (error) {
        return {
            push: () => { },
        }
    }
}

export const useSafeSearchParams = () => {
    try {
        return useSearchParams() || {
            get: () => "",
        }
    } catch (error) {

        return {
            get: () => "",
        }
    }
}
