import React from "react";
interface IRowProps {
    label: string;
    number: string;
}

export const Row = ({ label, number }: IRowProps) => {
    return (
        <div className="mr-2 w-30rem">
            <div>{label}</div>
            <div>{number}</div>
        </div>
    );
};
