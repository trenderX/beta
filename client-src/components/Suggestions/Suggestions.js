import React, { PropTypes } from 'react';
import styles from './Suggestions.css';
import cssModules from 'react-css-modules';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';


const Suggestions = (props) =>
    <List theme={styles} styleName={props.listShow} selectable ripple>
      {props.tagsFromDB.map( tag =>
        // console.log('tag in map:', tag.text);
         [
          <ListItem
            theme={styles}
            caption={tag.text}
          />,
          <ListDivider theme={styles} />
        ]
      )}
    </List>;

export default cssModules(Suggestions, styles);
