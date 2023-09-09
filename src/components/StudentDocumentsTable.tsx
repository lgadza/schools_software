const StudentDocumentsTable=():JSX.Element=>{
    return(
        <table className="student-table candidate-details-field w-100">
        <tbody>
          <tr>
            <td>Academic transcript</td>
            <td>Habberk</td>
          </tr>
          <tr>
            <td>Letter of recommendation</td>
            <td>15135</td>
          </tr>
          <th className="py-3 header">Other Supporting Documents</th>
          <tr>
            <td>Mathematics Certificate</td>
            <td> - </td>
          </tr>
          <tr>
            <td>Biology Certificate</td>
            <td> - </td>
          </tr>
        </tbody>
      </table>
    )
}
export default StudentDocumentsTable