import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './LanguageIcon.css'

import English from 'language-icons/icons/en.svg'
import German from 'language-icons/icons/de.svg'

class LanguageIcon extends PureComponent {
  render() {
    let Icon
    switch (this.props.language) {
      case 'English': Icon = English; break
      case 'German': Icon = German; break
      default: Icon = undefined
    }
    if (Icon !== undefined) {
      return <img
        className={'LanguageIcon'}
        alt={this.props.language}
        src={Icon}
        title={this.props.language}
      />
    }
    console.log('Unknown language: ' + this.props.language)
    return ' ?'+this.props.language
  }
}

LanguageIcon.propTypes = {
  language: PropTypes.string.isRequired
}

export default LanguageIcon
