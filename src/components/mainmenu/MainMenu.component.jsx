import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menuitem/MenuItem.component';
import {selectMenuSections} from '../../redux/main-menu/main-menu.selectors';

import './mainmenu.styles.scss';

const MainMenu = ({sections}) => {

    return (
        <div className='mainMenu'>
            {sections.map(({id, ...sectionProps}) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectMenuSections
});

export default connect(mapStateToProps)(MainMenu);
