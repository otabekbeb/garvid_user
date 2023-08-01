import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
      <html><table>
        <tr>
            <th>fullname</th>
            <th>email</th>
            <th>phone_number</th>
            <th>message</th>
        </tr>
        </table></html>
      </div>
    )
  }
}
