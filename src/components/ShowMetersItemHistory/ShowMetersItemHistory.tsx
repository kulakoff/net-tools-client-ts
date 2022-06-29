import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CircularProgress from '@mui/material/CircularProgress';


type Props = {}

const ShowMetersItemHistory = (props: Props) => {
    const { selectedItem } = useTypedSelector((state) => state.counters);
  return (
    <div>
        {selectedItem ?  <pre>{JSON.stringify(selectedItem.history, null, 2)}</pre> : <>Загрузка ...<CircularProgress/></>}
    </div>
  )
}
export default ShowMetersItemHistory