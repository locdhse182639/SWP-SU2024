import React, { useState, useEffect } from 'react';
import { fetchPoints, applyPoints } from '../components/pointsService';
import { Button, Typography } from '@mui/material';

const PointsDisplay = ({ customerId, onPointsApplied }) => {
    const [points, setPoints] = useState(0);
    const [applied, setApplied] = useState(false); // State để theo dõi trạng thái của việc áp dụng điểm

    useEffect(() => {
        const loadPoints = async () => {
            try {
                const data = await fetchPoints(customerId);
                setPoints(data.points);
            } catch (error) {
                console.error('Error fetching points:', error);
                alert('Failed to fetch points. Please check the console for more details.');
            }
        };

        loadPoints();
    }, [customerId]);

    const handleApplyPoints = async () => {
        try {
            const pointsToApply = points; // Sử dụng toàn bộ điểm hiện có
            const data = await applyPoints(customerId, pointsToApply);
            setPoints(data.remainingPoints);
            onPointsApplied(pointsToApply);
            setApplied(true); // Ẩn cả nút Apply và dòng chữ "Your Points" sau khi nhấn
            alert(`Applied ${pointsToApply} points. Remaining points: ${data.remainingPoints}`);
        } catch (error) {
            console.error('Error applying points:', error);
            alert('Failed to apply points. Please check the console for more details.');
        }
    };

    return (
        <div className="points-display">
            {!applied && ( // Chỉ hiển thị khi chưa áp dụng điểm
                <>
                    <Typography variant="h6">Your Points: {points}</Typography>
                    <Button onClick={handleApplyPoints} variant="contained" style={{ marginTop: '10px' }}>
                        Apply All Points
                    </Button>
                </>
            )}
        </div>
    );
};

export default PointsDisplay;
