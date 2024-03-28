import React from 'react'

// const Hello=() => {
//     return(
//         <div>
//             <h1>Hello Omar</h1>
//         </div>
//     )
// }
// export default Hello

// alternatively you can do this
const Hello=() => {
    return React.createElement('div', null,
    <strong>
        <pre>=====================================</pre>
        <pre>|       SEMESTER: 2024              |</pre>
        <pre>|       COURSE: 123                 |</pre>
        <pre>|       SUBJECT: WEB FRAMEWORKS     |</pre>
        <pre>|       DAYS: MONDAYS/WEDNESDAYS    |</pre>
        <pre>|       TIME: 11 AM                 |</pre>
        <pre>=====================================</pre>
    </strong>)
}

export default Hello