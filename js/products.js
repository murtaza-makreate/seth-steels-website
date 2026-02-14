const products = [
    {
        id: 'ms-plates',
        name: 'MS Plates',
        category: 'Plates & Sheets',
        image: 'img/ms_plates.png',
        description: 'High-strength mild steel plates for heavy structural applications and shipbuilding.',
        details: 'Our MS Plates are manufactured to the highest standards, offering superior strength and durability. They are ideal for use in construction, shipbuilding, and heavy machinery.',
        specs: [
            { label: 'Material', value: 'Mild Steel' },
            { label: 'Thickness', value: '5mm - 150mm' },
            { label: 'Grades', value: 'IS 2062 E250, E350' },
            { label: 'Usage', value: 'Construction, Infrastructure' }
        ]
    },
    {
        id: 'cr-sheets',
        name: 'CR Sheets',
        category: 'Plates & Sheets',
        image: 'img/cr_sheets.png',
        description: 'Cold rolled sheets with superior surface finish for automotive and precision use.',
        details: 'Cold Rolled (CR) Sheets maintain close tolerances and offer a smooth surface finish. Perfect for automobile components, home appliances, and precision engineering.',
        specs: [
            { label: 'Material', value: 'Cold Rolled Steel' },
            { label: 'Thickness', value: '0.5mm - 3.0mm' },
            { label: 'Finish', value: 'Matte, Glossy' },
            { label: 'Usage', value: 'Automotive, Appliances' }
        ]
    },
    {
        id: 'gi-sheets',
        name: 'GI Sheets',
        category: 'Plates & Sheets',
        image: 'img/gi_sheets.png',
        description: 'Galvanized iron sheets offering excellent corrosion resistance for roofing.',
        details: 'Galvanized Iron (GI) Sheets are coated with a protective layer of zinc to prevent rusting. They are widely used in roofing, walling, and ducting work.',
        specs: [
            { label: 'Material', value: 'Galvanized Iron' },
            { label: 'Coating', value: 'Zinc (GSM 120-275)' },
            { label: 'Thickness', value: '0.3mm - 2.5mm' },
            { label: 'Usage', value: 'Roofing, HVAC' }
        ]
    },
    {
        id: 'ms-angles',
        name: 'MS Angles',
        category: 'Structurals',
        image: 'img/ms_angles.png',
        description: 'Versatile L-shaped brackets for frameworks, supports, and shelves.',
        details: 'MS Angles are L-shaped structural steel sections used in virtually all types of construction projects. They provide excellent support and stability.',
        specs: [
            { label: 'Material', value: 'Mild Steel' },
            { label: 'Sizes', value: '25x25mm - 200x200mm' },
            { label: 'Length', value: '6m - 12m' },
            { label: 'Usage', value: 'Fabrication, Towers' }
        ]
    },
    {
        id: 'ms-beams',
        name: 'MS Beams',
        category: 'Structurals',
        image: 'img/ms_beams.png',
        description: 'I-beams and H-beams for major load-bearing structures.',
        details: 'Also known as I-sections or H-sections, our MS Beams are designed to support heavy loads in large structures like bridges, buildings, and industrial sheds.',
        specs: [
            { label: 'Material', value: 'Mild Steel' },
            { label: 'Type', value: 'UB, UC, NPB, W-Section' },
            { label: 'Grades', value: 'IS 2062 E250, E350' },
            { label: 'Usage', value: 'Bridges, Industrial Sheds' }
        ]
    },
    {
        id: 'tmt-bars',
        name: 'TMT Bars',
        category: 'Construction',
        image: 'img/tmt_bars.png',
        description: 'Thermo-mechanically treated bars for earthquake-resistant construction.',
        details: 'Our TMT Bars feature a tough outer core and a soft inner core, providing the perfect balance of strength and flexibility. Essential for earthquake-resistant structures.',
        specs: [
            { label: 'Grade', value: 'Fe 500, Fe 500D, Fe 550D' },
            { label: 'Diameter', value: '8mm - 40mm' },
            { label: 'Type', value: 'Ribbed' },
            { label: 'Usage', value: 'Residential & Commercial Construction' }
        ]
    },
    {
        id: 'ms-pipes',
        name: 'MS Pipes',
        category: 'Pipes & Tubes',
        image: 'img/ms_pipes.png',
        description: 'Durable mild steel pipes for fluid blocking and structural use.',
        details: 'We offer a wide range of MS Pipes (Round, Square, Rectangular) suitable for structural applications, water transmission, and general fabrication.',
        specs: [
            { label: 'Shape', value: 'Round, Square, Rectangular' },
            { label: 'Thickness', value: '1.2mm - 10mm' },
            { label: 'Standard', value: 'IS 1239, IS 1161' },
            { label: 'Usage', value: 'Structure, Fluid Transport' }
        ]
    },
    {
        id: 'profile-cutting',
        name: 'Profile Cutting',
        category: 'Custom Services',
        image: 'img/profile_cutting.png',
        description: 'Custom profile cutting for MS Plates to exact specifications.',
        details: 'Get MS Plates cut to your exact shape and size requirements. We use advanced CNC plasma and oxy-fuel cutting machines for precision results.',
        specs: [
            { label: 'Material', value: 'MS Plate' },
            { label: 'Thickness', value: 'Up to 200mm' },
            { label: 'Accuracy', value: '+/- 1mm' },
            { label: 'Service', value: 'Custom Shape Cutting' }
        ]
    },
    {
        id: 'ms-channels',
        name: 'MS Channels',
        category: 'Structurals',
        image: 'img/ms_channels.png',
        description: 'C-shaped channels for structural support in fabrication.',
        details: 'MS Channels are C-shaped sections providing superior structural support. They are widely used in truck bodies, industrial frames, and heavy machinery bases.',
        specs: [
            { label: 'Material', value: 'Mild Steel' },
            { label: 'Sizes', value: '75x40mm - 400x100mm' },
            { label: 'Length', value: '6m - 12m' },
            { label: 'Usage', value: 'Vehicle Chassis, Frames' }
        ]
    },
    {
        id: 'ms-flats',
        name: 'MS Flats',
        category: 'Structurals',
        image: 'img/ms_flats.png',
        description: 'Flat bars for framework, brackets, and base plates.',
        details: 'MS Flats are thin, flat strips of mild steel used in fabrication, grating, earthing, and general engineering work.',
        specs: [
            { label: 'Material', value: 'Mild Steel' },
            { label: 'Width', value: '12mm - 300mm' },
            { label: 'Thickness', value: '3mm - 25mm' },
            { label: 'Usage', value: 'Grating, Brackets, Earthing' }
        ]
    },
    {
        id: 'ms-circles',
        name: 'MS Circles',
        category: 'Custom Services',
        image: 'img/ms_circles.png',
        description: 'Circular cutouts for specialized manufacturing needs.',
        details: 'Precision-cut MS Circles available in various diameters and quantities. Ideal for manufacturing flanges, gears, and machine parts.',
        specs: [
            { label: 'Material', value: 'Mild Steel' },
            { label: 'Diameter', value: 'Custom as per requirement' },
            { label: 'Thickness', value: '3mm - 100mm' },
            { label: 'Usage', value: 'Flanges, Gears' }
        ]
    },
    {
        id: 'ms-chequered-plates',
        name: 'MS Chequered Plates',
        category: 'Plates & Sheets',
        image: 'img/ms_chequered_plates.png',
        description: 'Anti-skid plates for flooring and staircases.',
        details: 'MS Chequered Plates feature a raised pattern (tear-drop or diamond) to provide excellent grip. Essential for industrial flooring, stair treads, and vehicle beds.',
        specs: [
            { label: 'Material', value: 'Mild Steel' },
            { label: 'Pattern', value: 'Teardrop / Diamond' },
            { label: 'Thickness', value: '3mm - 10mm' },
            { label: 'Usage', value: 'Flooring, Anti-skid surface' }
        ]
    }
];

// Export for usage if using modules, or attach to window for simple script inclusion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
} else {
    window.products = products;
}
