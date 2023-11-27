import React from 'react'

export default function Prop() {
    const firstName = 'Himanshu';
    const lastName = 'Goyal';
    const date = new Date();

    // Array
    // const colors = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet']
    const colors = [
        <h3>Red</h3>,
        <h3>Orange</h3>,
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>,
    ]
    return (
    <>
        <h1>Hello {firstName} {lastName}!</h1>
        <p>Time is {date.getHours() % 12}</p>

        {colors}
        {/* same as  */}
        {/* <h3>Red</h3>,
        <h3>Orange</h3>,
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>, */}
    </>
    )
}
