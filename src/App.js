import {Switch, Route} from 'react-router-dom'
// import WeatherComponent from './Components/WeatherComponent'
import HomeComponent from './Components/HomeComponent'
import NotFound from './Components/NotFound'
import './App.css'

const App = () => (
  <>
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    {/* <Route exact path="/weatherinfo/:city" component={WeatherComponent} /> */}
    <Route path="/*" component={NotFound} />
  </Switch>
  </>
)

export default App