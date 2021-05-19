import React, {PureComponent} from 'react'
import './SeasonEpisodeBox.css'

import type { Language } from '../types/Language'

type Props = {
  language: Language,
  season: number,
  episode?: number | string
}

class SeasonEpisodeBox extends PureComponent<Props> {
  render() {
    const l = this.props.language
    return <div className={'SeasonEpisodeBox'}>
      <div className={'row'}>
        <div className={'label'}>
          {l === 'English' && <>Season</>}
          {l === 'German' && <>Staffel</>}
        </div>
        <div>{this.props.season}</div>
      </div>
      {this.props.episode && (
        <div className={'row'}>
          <div className={'label'}>
            {l === 'English' && <>Episode</>}
            {l === 'German' && <>Folge</>}
          </div>
          <div>{this.props.episode}</div>
        </div>
      )}
    </div>
  }
}

export default SeasonEpisodeBox
