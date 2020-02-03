import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item';
import { DirectoryMenu } from './styles.js';

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {sections && sections.map(({id, ...other }) => (
      <MenuItem key={id} {...other} />
    ))}
  </DirectoryMenu>
);

const mapStateToProps = state => ({
  sections: state.directory.sections,
});

export default connect(mapStateToProps)(Directory);
