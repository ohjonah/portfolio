import * as React from 'react';


export interface IAppProps {
    compiler: string;
    framework: string;
}



export const App = (props: IAppProps) => {
    const { compiler, framework } = props;

    console.log('hi - hello');


    return (
        <h1>Is { compiler } and { framework } working?</h1>
    );
};
