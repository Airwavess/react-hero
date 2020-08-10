import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

import Wave from './components/_Shared/Wave';
import HeroPage from './pages/HeroPage';
import { fetchHero } from './redux/heroes/actions';

const Container = styled.div`
  margin: 5vh 20% 0;
  display: grid;

  @media (max-width: 992px) {
    margin: 3rem 12% 0;
  }

  @media (max-width: 768px) {
    margin: 3rem 10% 0;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHero());
  }, [dispatch]);

  return (
    <Container>
      <Wave />
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/heroes' />} />
          <Route path='/heroes/:heroId?' component={HeroPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
