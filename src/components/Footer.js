import React, {PureComponent} from 'react'
import './Footer.css'

import type { Language } from '../types/Language'

type Props = {
  language: Language,
}

class Footer extends PureComponent<Props> {
  render() {
    const l = this.props.language
    return <div className={'Footer'}>
      {l === 'English' && <>Source: </>}
      {l === 'German' && <>Quelle: </>}
      <a href={'https://github.com/barbeque-squared/mlp-episode-randomizer'}>
        github.com/barbeque-squared/mlp-episode-randomizer
      </a>
    </div>
  }
}

export default Footer
