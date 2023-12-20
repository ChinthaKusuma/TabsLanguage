import {Component} from 'react'
import Image from '../Image'
import TabItem from '../TabItem'

import './index.css'

class Tabs extends Component {
  state = {activeId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  getChange1 = id => {
    this.setState({
      activeId: id,
    })
  }

  getData = () => {
    const {list2} = this.props
    const {activeId} = this.state
    return (
      <>
        <ul className="ul1">
          {list2.map(each => (
            <TabItem
              item={each}
              activeId={activeId}
              getChange1={this.getChange1}
              list3={list2}
              key={each.id}
            />
          ))}
        </ul>
        {list2.map(each => {
          if (each.id === activeId) {
            return (
              <Image
                alt1={each.imageAltText}
                key={each.id}
                src1={each.imageUrl}
              />
            )
          }
          return null
        })}
      </>
    )
  }

  render() {
    return (
      <div className="bg1">
        <h1 className="h11">Multilingual Greetings</h1>
        {this.getData()}
      </div>
    )
  }
}
export default Tabs
