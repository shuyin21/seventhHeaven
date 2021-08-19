import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to='about'>
                        About us
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='classes'>
                        Classes
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='locations'>
                        Locations
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='contact'>
                        Contact
                    </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Free Trials</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
