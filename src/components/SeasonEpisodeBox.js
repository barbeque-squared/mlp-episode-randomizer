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
    return <table className={'SeasonEpisodeBox'}>
      <tbody>
        <tr>
          <td className={'label'}>
            {l === 'English' && <>Season</>}
            {l === 'German' && <>Staffel</>}
          </td>
          <td>
            {this.props.season}
          </td>
        </tr>
        {this.props.episode && (
          <tr>
            <td className={'label'}>
              {l === 'English' && <>Episode</>}
              {l === 'German' && <>Folge</>}
            </td>
            <td>
              {this.props.episode}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  }
}

export default SeasonEpisodeBox
