import React from "react";
import PropTypes from "prop-types";
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import Delete from '@material-ui/icons/Delete';
import Stop from '@material-ui/icons/Stop';

const ButtonLink = ({ action, text, icon, ariaLabel }) => {
  const execAction = e => {
    e.preventDefault();
    action && action();
  };
  const renderIcon = () => {
    return icon;
  };
  return (
    <a
      href="#"
      onClick={execAction}
      className="button-action"
      aria-label={ariaLabel}
    >
      {renderIcon()}
      {text}
    </a>
  );
};

ButtonLink.propTypes = {
  /**
   * action to call on clicking
   */
  action: PropTypes.func,
  /**
   * text of the button
   */
  text: PropTypes.string,
  /**
   * eventual icon text to show the icon in the ButtonLink
   */
  icon: PropTypes.object,
  /**
   * the aria label text
   */
  ariaLabel: PropTypes.string
};

export default ButtonLink;
export const PlayLink = props => <ButtonLink {...props} icon={<PlayCircleFilled style={{ fontSize: 40 }}/>} ariaLabel="Play"/>;
export const PauseLink = props => <ButtonLink {...props} icon={<PauseCircleFilled style={{ fontSize: 40 }}/>} ariaLabel="Pause"/>;
export const StopLink = props => <ButtonLink {...props} icon={<Stop style={{ fontSize: 40 }}/>} ariaLabel="Stop"/>;
export const RemoveLink = props => <ButtonLink {...props} icon={<Delete style={{ fontSize: 40 }}/>} ariaLabel="Remove"/>;
