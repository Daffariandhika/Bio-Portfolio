import { IconButton, Tooltip, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';

const StyledIconButton = styled(IconButton)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: white;
`;

function ScrollToTop() {
    const [open, setOpen] = React.useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const handleClick = () => {
        setOpen(false);
        scroll.scrollToTop({ duration: 0 });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 500;
            if (window.scrollY > scrollThreshold) setShouldRender(true)
            else setShouldRender(false);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, []);

    return (
        shouldRender &&
        <Tooltip title='Scroll to top' placement='top' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <StyledIconButton className='PrimaryBtn' size='large' aria-label='scroll to top' onClick={handleClick} >
                <MdKeyboardArrowUp fontSize={40} />
            </StyledIconButton>
        </Tooltip>
    )
}

export default ScrollToTop