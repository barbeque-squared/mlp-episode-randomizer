import React, {Component} from 'react';
import './App.css';
import LanguageIcon from './components/LanguageIcon'
import { CHOICES } from './constants'
import type { WatchableType } from './types/WatchableType'
import WatchableThing from './components/WatchableThing'
import { Languages } from './types/Language'
import { Tags } from './types/Tag'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'English',
      doubleEpisodes: true,
      specials: false,
      equestriaGirls: false,
      tag: '',
      recompute: true,
      choices: [],
      result: undefined,
    }
  }

  radioLanguage = (event) => {
    this.setState({language: event.target.value})
  }

  checkDoubleEpisodes = (event) => {
    this.setState({
      doubleEpisodes: event.target.checked,
      recompute: true
    })
  }

  checkSpecials = (event) => {
    this.setState({
      specials: event.target.checked,
      recompute: true
    })
  }

  checkEquestriaGirls = (event) => {
    this.setState({
      equestriaGirls: event.target.checked,
      recompute: true
    })
  }

  selectTag = (event) => {
    this.setState({tag: event.target.value})
  }

  applyFilters() {
    let filters: WatchableType[] = ['EPISODE']
    if (this.state.doubleEpisodes) {filters.push('DOUBLE_EPISODE')}
    if (this.state.specials) {filters.push('SPECIAL')}
    if (this.state.equestriaGirls) {filters.push('EQUESTRIA_GIRLS')}
    const choices = CHOICES.filter(w => filters.includes(w.type))
    this.setState({
      choices,
      recompute: false
    }, this.random)
  }

  random = () => {
    if (this.state.recompute) {
      this.applyFilters()
    } else {
      this.setState({
        result: this.state.choices[Math.floor(Math.random() * this.state.choices.length)]
      })
    }
  }

  render() {
    return (
      <div className={'App'}>
        <div className={'language'}>
          {Languages.map(l => {return (
            <label key={l}>
              <input type={'radio'} name={'language'} value={l} onChange={this.radioLanguage} defaultChecked={this.state.language === l}/>
              <LanguageIcon language={l} />
            </label>
          )})}
        </div>
        <div className={'random'}>
          <label>
            <input type={'checkbox'} checked={this.state.doubleEpisodes} onChange={this.checkDoubleEpisodes} />
            {this.state.language === 'English' && (<>Two-parters</>)}
            {this.state.language === 'German' && (<>Zwei-parters</>)}
          </label>
          <label>
            <input type={'checkbox'} value={this.state.specials} onChange={this.checkSpecials} />
            {this.state.language === 'English' && (<>Specials / Movie</>)}
            {this.state.language === 'German' && (<>Specials / Film</>)}
          </label>
          <label>
            <input type={'checkbox'} value={this.state.equestriaGirls} onChange={this.checkEquestriaGirls} />
            Equestria Girls
          </label>
          <select name={'tags'} onChange={this.selectTag}>
            <option value={''}>(Any)</option>
            {Tags.map(t => {return <option key={t} value={t}>{t}</option>})}
          </select>
          <button onClick={this.random}>Random</button>
        </div>
        {this.state.result && (
          <div className={'result'}>
            <WatchableThing thing={this.state.result} language={this.state.language} />
          </div>
        )}
      </div>
    )
  }
}

export default App;
