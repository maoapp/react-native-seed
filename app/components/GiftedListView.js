import React,{Component} from 'react';
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = ReactNative;


var styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    padding: 25,
    height: 70,
    borderBottomColor: '#47315a',
    borderBottomWidth: 1 
  },
};

var GListView = require('react-native-gifted-listview');

export default class GiftedListView extends Component {

  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      var rows = [
          'row '+((page - 1) * 3 + 1), 
          'row '+((page - 1) * 3 + 2), 
          'row '+((page - 1) * 3 + 3),
          'row '+((page - 1) * 3 + 4),
          'row '+((page - 1) * 3 + 5),
          'row '+((page - 1) * 3 + 6),
          'row '+((page - 1) * 3 + 7),
          'row '+((page - 1) * 3 + 8),
          'row '+((page - 1) * 3 + 9),
          'row '+((page - 1) * 3 + 10),
          'row '+((page - 1) * 3 + 11),
          'row '+((page - 1) * 3 + 12),
          'row '+((page - 1) * 3 + 13),
          'row '+((page - 1) * 3 + 14),
          'row '+((page - 1) * 3 + 15)];
      if (page === 10) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  }


  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPress(rowData) {
    console.log(rowData+' pressed');
  }

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        <Text>{rowData}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
        <GListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}

          refreshableTintColor="blue"
        />
    );
  }
}