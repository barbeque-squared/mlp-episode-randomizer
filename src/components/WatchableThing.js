import React, {PureComponent} from 'react'
import './WatchableThing.css'

import type { Watchable } from '../types/Watchable'
import type { Language } from '../types/Language'
import SeasonEpisodeBox from './SeasonEpisodeBox'

type Props = {
  thing: Watchable,
  language: Language
}

class WatchableThing extends PureComponent<Props> {
  render() {
    const w = this.props.thing
    const l = this.props.language
    let title = w.title.english
    if (l === 'German' && w.title.german) {
      title = w.title.german
    }
    return <div className={'WatchableThing'}>
      {w.season && (
        <div className={'seasonepisode'}>
          <SeasonEpisodeBox language={l} season={w.season} episode={w.episode} />
        </div>
      )}
      <div className={'title'}>
        {title}
      </div>
    </div>
  }
}

export default WatchableThing
