import React from 'react'
import './Terminal.css'
import { map } from '../../constants'
import Table from '../../components/table/table'

function Terminal(props) {
  const data = map[props.query];
  return (
    <div className="terminal">

      <p className="heading">Terminal</p>
      {/* <textarea className="text" rows={20} cols={80}> */}
      {/* </textarea> */}
      <Table headers={data.headers} data={data.data} />
    </div>
  )
}

export default Terminal