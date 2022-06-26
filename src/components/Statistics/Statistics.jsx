import React from 'react'

const Statistics = ({title, stats}) => {

  return (
    <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {stats && stats.map(({id, label, percentage}) => (
                <li className="item" key={id}>
                    <span className="label">{label}dupa</span>
                    <span className="percentage">{percentage}</span>
                </li>
            ))}
            {/* <li class="item">
                <span class="label">.docx</span>
                <span class="percentage">4%</span>
            </li>
            <li class="item">
                <span class="label">.mp3</span>
                <span class="percentage">14%</span>
            </li>
            <li class="item">
                <span class="label">.pdf</span>
                <span class="percentage">41%</span>
            </li>
            <li class="item">
                <span class="label">.mp4</span>
                <span class="percentage">12%</span>
            </li> */}
        </ul>
    </section>
  )
}

export default Statistics