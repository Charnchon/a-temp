import React, { useContext } from 'react'
import { TempValueContextWrapper } from '../../contexts/TempValueContext'
import TableCard from '../../layout/Table'
import { RankingComponents, RankingDetails } from './RankingElements'

const Ranking = () => {
  const { temp1, temp2, maxTemp, minTemp, tempAvg } = useContext(TempValueContextWrapper)
  return (
    <RankingComponents>
      <h1>RANKING</h1>
      <RankingDetails>
        <TableCard No="NO." Location="Location" Temperature="Temperature"></TableCard>

        {temp1 > temp2 ? (
          <>
            <TableCard No="1" Location="Artisan" Temperature={temp1} />
            <TableCard No="2" Location="My Home" Temperature={temp2} />
          </>
        ) : (
          <>
            <TableCard No="1" Location="My Home" Temperature={temp2} />
            <TableCard No="2" Location="Artisan" Temperature={temp1} />
          </>
        )}
      </RankingDetails>
    </RankingComponents>
  )
}

export default Ranking
