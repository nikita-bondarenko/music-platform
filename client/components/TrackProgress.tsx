import React, {FC} from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const TrackProgress: FC<TrackProgressProps> =
    ({
         left, right, onChange
     }) => {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <input type="range"
                       min={0}
                       max={right}
                       value={left}
                       onChange={onChange}
                />
                <div style={{width: 65}}>{left} / {right}</div>
            </div>
        );
    };

export default TrackProgress;