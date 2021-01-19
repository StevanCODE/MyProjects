import React from 'react'
import { Desc, Icon, StatsBox, StatsContainer, StatsHeading, StatsWrapper, Title } from './StatsElements'
import { StatsData } from '../../data/StatsData'


     

const Stats = () => {
    return (
        <>
            <StatsContainer>
                <StatsHeading> Why Choose Us </StatsHeading>
                <StatsWrapper>
                {StatsData.map((el,i) => {
                    return (
                        <StatsBox key = {i}>
                            <Icon> {el.icon} </Icon>
                            <Title> {el.title} </Title>
                            <Desc> {el.desc} </Desc>
                        </StatsBox>
                    )
                })}
                </StatsWrapper>
            </StatsContainer>
        </>
    )
}

export default Stats
