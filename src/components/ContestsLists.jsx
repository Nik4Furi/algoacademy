import React from 'react'

import contests from '../config/contests.json'
import ContestCard from './ContestCard'

function ContestsLists() {
  return (
    <>
      <div className="row">
        {contests.map(contest => {return <ContestCard key={contest.cate} title={contest.title} description={contest.description} img={contest.img} link={contest.link} />})}
      </div>
    </>
  )
}

export default ContestsLists
