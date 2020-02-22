import * as React from 'react';
import { ColorBox } from './ColorBox';
import BoxsGenerator from '../utilities/BoxsGenerator';
import * as ColorsBoardStyle from '../styles/ColorsBoard.scss';

interface BoardState {
   size: number,
   boxs: any
};

export class ColorsBoard extends React.Component<{}, BoardState> {
  constructor(props: any) {
		super(props);
    const size = 8;

    this.state = {
      size,
      boxs: BoxsGenerator(size)
    };
	};

  handleSwitchBoxs(currentBox: any, draggedBox: any) {
    const boxs = this.state.boxs;

    // Get indexes of two boxs that use to switch
    const draggedBoxIndex = boxs.findIndex((box: any) => box.id === draggedBox.id);
    const currentBoxIndex = boxs.findIndex((box: any) => box.id === currentBox.id);

    // Switch boxs by index
    boxs[draggedBoxIndex] = currentBox;
    boxs[currentBoxIndex] = draggedBox;

    this.setState({
      ...this.state,
      boxs
    });
  };

  handleDragStart(event: any, draggedBox: any) {
    event.dataTransfer.setData('dragged-id', draggedBox.id);
  };

  handleDragOver(event: any, draggedBox: any) {
    event.preventDefault();
  };

  handleDrop(event: any, currentBox: any) {
    const draggedId = event.dataTransfer.getData('dragged-id');
    const draggedBox = this.state.boxs.find((box: any) => box.id === draggedId);

    // Handle switch two boxs in state
    this.handleSwitchBoxs(currentBox, draggedBox);
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  render() {
    const boxWidth = 100 / this.state.size;
    const boxStyle = {
      width: `${boxWidth}%`
    };

    return <div className={ColorsBoardStyle.colorsBoard}>
      {this.state.boxs.map((box: any) =>
        <div
          key={box.id}
          id={'dropzone-' + box.id}
          style={boxStyle}
          className={ColorsBoardStyle.colorBox}
          onDragOver={(e) => this.handleDragOver(e, box)}
          onDrop={(e) => this.handleDrop(e, box)}
        >
          <ColorBox
            box={box}
            handleDragStart={this.handleDragStart} />
        </div>
      )}
    </div>;
  }
};
