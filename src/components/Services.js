import React, { Component } from 'react'
import { FaRegHandshake, 
         FaShuttleVan, 
         FaSignal,
         FaRegLightbulb } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaRegLightbulb />,
                title: 'Get Inspired',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaRegHandshake />,
                title: 'Make New Friends',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaSignal />,
                title: 'Fast Internet',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Find a room anywhere in the world" />
                <div className="services-center">
                    {this.state.services.map((item, index )=> {
                        return <article key={ index } className="service">
                            <span>{ item.icon }</span>
                            <h6>{ item.title }</h6>
                            <p>{ item.info }</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
