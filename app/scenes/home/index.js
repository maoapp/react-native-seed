import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import DataActions from '../../store/data/actions';

import styles from './styles';

class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  goToDemo = () => {
    this.props.navigation.navigate('demo');
  }

  render() {
    const { appData } = this.props;
    let gender;
    if (appData.dataFetched) {
      gender = <Text> {appData.data.gender} </Text>;
    }

    return (
      <View style={styles.scene}>
        {gender}
        <Button
          title="Try me!"
          onPress={this.goToDemo}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    appData: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: bindActionCreators(DataActions.fetchData, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)