import * as React from 'react';

export interface ColorBoxProps {
  box: any;
  handleDragStart: any;
}

export class ColorBox extends React.Component<ColorBoxProps, {}> {
  render() {
    const style = {
      width:      '100%',
      background: this.props.box.color,
    };

    return <div
              id={this.props.box.id}
              style={style}
              draggable
              onDragStart={(e) => this.props.handleDragStart(e, this.props.box)}>
            </div>;
  };
}
