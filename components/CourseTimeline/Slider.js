import RcSlider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
const { Handle: SliderHandle } = RcSlider;

const Handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} hrs`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <SliderHandle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const Slider = ({ value, min, max, step, setValue }) => {
  return (
    <RcSlider
      dots
      value={value}
      min={min}
      max={max}
      step={step}
      dotStyle={{
        marginTop: '16px',
        height: '16px',
        width: '16px',
        bottom: '-6px',
        marginLeft: '-8px',
        borderWidth: '4px'
      }}
      handle={Handle}
      // activeDotStyle={{ height: "25px", width: "25px" }}
      handleStyle={{
        height: '28px',
        width: '28px',
        marginTop: '-12px',
        marginLeft: '0px',
        borderWidth: '4px'
      }}
      marks={new Array((max - min) / step + 1)
        .fill(null)
        .map((_, i) => min + i * step)
        .reduce((acc, mark) => {
          acc[mark] = {
            label: mark,
            style: {
              fontSize: '1rem',
              color: value === mark ? 'blue' : undefined,
              fontWeight: value === mark ? 'bold' : undefined
            },
            fontFamily: '"Source Sans Pro", sans-serif'
          };
          return acc;
        }, {})}
      onChange={(value) => setValue(value)}
    />
  );
};

export default Slider;
