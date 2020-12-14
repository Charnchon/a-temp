import React, { useContext } from 'react'
import { TempValueContextWrapper } from '../../contexts/TempValueContext'
import Map from '../../layout/map'
import TempBox from '../../layout/TempBox'
import {
  BoxRealTime,
  ListTemp,
  RealTime,
  Wrapper
} from './ListElements'


const List = () => {

  const {maxTemp, minTemp, tempAvg} = useContext(TempValueContextWrapper)

  return (

    <RealTime>

      <ListTemp>

        <TempBox Hander='MAX' Temp={maxTemp} />

        <TempBox Hander='MIN' Temp={minTemp} />

        <TempBox Hander='NOW' Temp={tempAvg} />

      </ListTemp>

      <BoxRealTime>
        <Wrapper>
          <Map />
        </Wrapper>
      </BoxRealTime>

    </RealTime>

  )
}

export default List
