// self.onmessage = function(e) {
//     if (e.data.type === 'calculateAverage') {
//         const { points, partNames } = e.data;
//         const averages = {};
//         const extremePoints = {};
// console.log('points :>> ', points);
//         function getTopBottomPoints(partPoints) {
//             const top = partPoints.length > 0 ? partPoints[0] : null;
//             const bottom = partPoints.length > 0 ? partPoints[partPoints.length - 1] : null;
//             return { top, bottom };
//         }

//         // Function to calculate combined averages for top and bottom points
//         function calculateCombinedAverages(partName, topPoints, bottomPoints) {
//             const topAverage = calculateAverageOfPoints(topPoints);
//             const bottomAverage = calculateAverageOfPoints(bottomPoints);
//             averages[partName] = { top: topAverage, bottom: bottomAverage };

//             console.log(`Average of ${partName} is ${topAverage ? `${topAverage.x}, ${topAverage.y}` : 'None'} for the ${partName} having their extreme points ${topPoints.length > 0 ? `${topPoints[0].x}, ${topPoints[0].y}` : 'None'} and ${bottomPoints.length > 0 ? `${bottomPoints[bottomPoints.length - 1].x}, ${bottomPoints[bottomPoints.length - 1].y}` : 'None'}.`);

//                         // // Log the averages along with the part name and extreme points
//                         // console.log(`Average for ${partName}:`);
//                         // console.log(`Top Average: ${topAverage ? `x: ${topAverage.x}, y: ${topAverage.y}` : 'None'}`);
//                         // console.log(`Bottom Average: ${bottomAverage ? `x: ${bottomAverage.x}, y: ${bottomAverage.y}` : 'None'}`);
//                         // console.log(`Extreme Points for ${partName}:`);
//                         // console.log(`Top: ${topPoints.length > 0 ? `x: ${topPoints[0].x}, y: ${topPoints[0].y}` : 'None'}`);
//                         // console.log(`Bottom: ${bottomPoints.length > 0 ? `x: ${bottomPoints[bottomPoints.length - 1].x}, y: ${bottomPoints[bottomPoints.length - 1].y}` : 'None'}`);
            
//         }

//         // Function to store extreme points for a given part
//         function storeExtremePoints(partName, top, bottom) {
//             if (partName && partNames[partName]) {
//                 extremePoints[partNames[partName]] = { top, bottom };
//             } else {
//                 // console.log(`storeExtremePoints: partName '${partName}' is not found in partNames, skipping this part.`);
//             }
//         }
        
//         // Process each part
//         const parts = [
//             { name: 'leftUpperArm', front: 'leftUpperArmFront', back: 'leftUpperArmBack' },
//             { name: 'rightUpperArm', front: 'rightUpperArmFront', back: 'rightUpperArmBack' },
//             { name: 'leftLowerArm', front: 'leftLowerArmFront', back: 'leftLowerArmBack' },
//             { name: 'rightLowerArm', front: 'rightLowerArmFront', back: 'rightLowerArmBack' },
//             { name: 'leftUpperLeg', front: 'leftUpperLegFront', back: 'leftUpperLegBack' },
//             { name: 'rightUpperLeg', front: 'rightUpperLegFront', back: 'rightUpperLegBack' },
//             { name: 'leftLowerLeg', front: 'leftLowerLegFront', back: 'leftLowerLegBack' },
//             { name: 'rightLowerLeg', front: 'rightLowerLegFront', back: 'rightLowerLegBack' },
//             { name: 'torso', front: 'torsoFront', back: 'torsoBack' },
//             { name: 'leftFace', points: 'leftFace' },
//             { name: 'rightFace', points: 'rightFace' },
//             { name: 'leftHand', points: 'leftHand' },
//             { name: 'rightHand', points: 'rightHand' },
//             { name: 'leftFoot', points: 'leftFoot' },
//             { name: 'rightFoot', points: 'rightFoot' },
//             { name: 'leftLowerLegFront', points: 'leftLowerLegFront' },
//             { name: 'leftUpperArmBack', points: 'leftUpperArmBack' },
//             { name: 'leftUpperArmFront', points: 'leftUpperArmFront' },
//             { name: 'leftUpperLegBack', points: 'leftUpperLegBack' },
//             { name: 'leftUpperLegFront', points: 'leftUpperLegFront' },
//             { name: 'rightLowerLegFront', points: 'rightLowerLegFront' },
//             { name: 'rightUpperArmBack', points: 'rightUpperArmBack' },
//             { name: 'rightUpperArmFront', points: 'rightUpperArmFront' },
//             { name: 'rightUpperLegBack', points: 'rightUpperLegBack' }
//         ];
        
//         parts.forEach(part => {
//             if (part.points) {
//                 const { top, bottom } = getTopBottomPoints(points[part.points]);
//                 if (partNames[part.points]) {
//                     storeExtremePoints(part.points, top, bottom);
//                     calculateCombinedAverages(`combined_${part.name}`, [top], [bottom]);
//                 } else {
//                     // console.log(`storeExtremePoints: partName '${part.points}' is not found in partNames, skipping this part.`);
//                 }
//             } else {
//                 const frontPoints = points[part.front];
//                 const backPoints = points[part.back];
//                 const { top: frontTop, bottom: frontBottom } = getTopBottomPoints(frontPoints);
//                 const { top: backTop, bottom: backBottom } = getTopBottomPoints(backPoints);
        
//                 if (partNames[part.front]) {
//                     storeExtremePoints(part.front, frontTop, frontBottom);
//                 } else {
//                     // console.log(`storeExtremePoints: partName '${part.front}' is not found in partNames, skipping this part.`);
//                 }
        
//                 if (partNames[part.back]) {
//                     storeExtremePoints(part.back, backTop, backBottom);
//                 } else {
//                     // console.log(`storeE/xtremePoints: partName '${part.back}' is not found in partNames, skipping this part.`);
//                 }
        
//                 calculateCombinedAverages(`combined_${part.name}`, [frontTop, backTop], [frontBottom, backBottom]);
//             }
//         });
//         console.log('averages  :>> ',averages);
//         self.postMessage({
//             type: 'combinedResults',
//             averages: averages,
//             extremePoints: extremePoints,
//             allExtremePoints: true
//         });

//     } else {
//         // Regular point calculation case
//         const { imageData, partName, width, height } = e.data;
//         const extremePoints = findImageExtremePoints(imageData, width, height);
//         // console.log('extremePoints :>> ', extremePoints);
//         self.postMessage({
//             type: 'combinedResults',
//             partName: partName,
//             extremePoints: extremePoints
//         });
//     }
// };

// function findImageExtremePoints(imageData, width, height) {
//     let topMost = { x: -1, y: height };
//     let bottomMost = { x: -1, y: -1 };

//     for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width; x++) {
//             const index = (y * width + x) * 4;
//             if (imageData[index + 3] > 0) {
//                 if (y < topMost.y) {
//                     topMost = { x, y };
//                 }
//                 if (y > bottomMost.y) {
//                     bottomMost = { x, y };
//                 }
//             }
//         }
//     }

//     return {
//         top: topMost.x !== -1 ? topMost : null,
//         bottom: bottomMost.x !== -1 ? bottomMost : null
//     };
// }

// function calculateAverageOfPoints(points) {
//     const validPoints = points.filter(point => point && typeof point.x === 'number' && typeof point.y === 'number');

//     if (validPoints.length === 0) {
//         return null;
//     }

//     const sumX = validPoints.reduce((sum, point) => sum + point.x, 0);
//     const sumY = validPoints.reduce((sum, point) => sum + point.y, 0);

//     return {
//         x: sumX / validPoints.length,
//         y: sumY / validPoints.length
//     };
// }

// function findImageExtremePoints(imageData, width, height) {
//     let topMost = { x: -1, y: height };
//     let bottomMost = { x: -1, y: -1 };

//     for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width; x++) {
//             const index = (y * width + x) * 4;
//             if (imageData[index + 3] > 0) {
//                 if (y < topMost.y) {
//                     topMost = { x, y };
//                 }
//                 if (y > bottomMost.y) {
//                     bottomMost = { x, y };
//                 }
//             }
//         }
//     }

//     return {
//         top: topMost.x !== -1 ? topMost : null,
//         bottom: bottomMost.x !== -1 ? bottomMost : null
//     };
// }

// function calculateAverageOfPoints(points) {
//     const validPoints = points.filter(point => point && typeof point.x === 'number' && typeof point.y === 'number');

//     if (validPoints.length === 0) {
//         return null;
//     }

//     const sumX = validPoints.reduce((sum, point) => sum + point.x, 0);
//     const sumY = validPoints.reduce((sum, point) => sum + point.y, 0);

//     return {
//         x: sumX / validPoints.length,
//         y: sumY / validPoints.length
//     };
// }

// Helper function to calculate average point
function calculateAveragePoint(points) {
    if (!points || points.length === 0) return null;
    
    const sum = points.reduce((acc, point) => ({
        x: acc.x + point.x,
        y: acc.y + point.y
    }), { x: 0, y: 0 });
    
    return {
        x: sum.x / points.length,
        y: sum.y / points.length
    };
}

// Helper function to find extreme points in a segment
function findExtremePoints(imageData, width, height) {
    let topPoint = null;
    let bottomPoint = null;
    let minY = Infinity;
    let maxY = -Infinity;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            if (imageData[idx + 3] !== 0) { // If pixel is not transparent
                if (y < minY) {
                    minY = y;
                    topPoint = { x, y };
                }
                if (y > maxY) {
                    maxY = y;
                    bottomPoint = { x, y };
                }
            }
        }
    }

    return topPoint && bottomPoint ? { top: topPoint, bottom: bottomPoint } : null;
}

// Function to calculate combined averages for front and back parts
function calculateCombinedAverages(points) {
    const averages = {};

    // Process each body part pair (front and back)
    if (points.leftUpperArmFront && points.leftUpperArmBack) {
        const frontPoints = points.leftUpperArmFront;
        const backPoints = points.leftUpperArmBack;
        averages.left_upper_arm = {
            top: calculateAveragePoint([
                ...frontPoints.filter(p => p.y === Math.min(...frontPoints.map(p => p.y))),
                ...backPoints.filter(p => p.y === Math.min(...backPoints.map(p => p.y)))
            ]),
            bottom: calculateAveragePoint([
                ...frontPoints.filter(p => p.y === Math.max(...frontPoints.map(p => p.y))),
                ...backPoints.filter(p => p.y === Math.max(...backPoints.map(p => p.y)))
            ])
        };
    }

    // Repeat for other paired body parts
    const bodyParts = [
        {front: 'rightUpperArmFront', back: 'rightUpperArmBack', combined: 'right_upper_arm'},
        {front: 'leftLowerArmFront', back: 'leftLowerArmBack', combined: 'left_lower_arm'},
        {front: 'rightLowerArmFront', back: 'rightLowerArmBack', combined: 'right_lower_arm'},
        {front: 'leftUpperLegFront', back: 'leftUpperLegBack', combined: 'left_upper_leg'},
        {front: 'rightUpperLegFront', back: 'rightUpperLegBack', combined: 'right_upper_leg'},
        {front: 'leftLowerLegFront', back: 'leftLowerLegBack', combined: 'left_lower_leg'},
        {front: 'rightLowerLegFront', back: 'rightLowerLegBack', combined: 'right_lower_leg'}
    ];

    bodyParts.forEach(({ front, back, combined }) => {
        if (points[front] && points[back]) {
            const frontPoints = points[front];
            const backPoints = points[back];
            averages[combined] = {
                top: calculateAveragePoint([
                    ...frontPoints.filter(p => p.y === Math.min(...frontPoints.map(p => p.y))),
                    ...backPoints.filter(p => p.y === Math.min(...backPoints.map(p => p.y)))
                ]),
                bottom: calculateAveragePoint([
                    ...frontPoints.filter(p => p.y === Math.max(...frontPoints.map(p => p.y))),
                    ...backPoints.filter(p => p.y === Math.max(...backPoints.map(p => p.y)))
                ])
            };
        }
    });

    return averages;
}

// Main worker message handler
self.onmessage = function(e) {
    const { type, imageData, partName, width, height, points } = e.data;

    if (type === 'calculateAverage') {
        // Calculate combined averages for front and back parts
        const averages = calculateCombinedAverages(points);
        
        // Store extreme points for each individual part
        const extremePoints = {};
        Object.entries(points).forEach(([part, pointArray]) => {
            if (pointArray && pointArray.length > 0) {
                const topPoints = pointArray.filter(p => p.y === Math.min(...pointArray.map(p => p.y)));
                const bottomPoints = pointArray.filter(p => p.y === Math.max(...pointArray.map(p => p.y)));
                
                extremePoints[part] = {
                    top: calculateAveragePoint(topPoints),
                    bottom: calculateAveragePoint(bottomPoints)
                };
            }
        });

        self.postMessage({
            type: 'combinedResults',
            averages,
            extremePoints
        });
    } else {
        // Process individual segment
        const extremePoints = findExtremePoints(imageData, width, height);
        
        self.postMessage({
            type: 'segmentResults',
            extremePoints,
            partName
        });
    }
};