var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mossdepotsinitiallygeneralsupply_1 = new ol.format.GeoJSON();
var features_mossdepotsinitiallygeneralsupply_1 = format_mossdepotsinitiallygeneralsupply_1.readFeatures(json_mossdepotsinitiallygeneralsupply_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mossdepotsinitiallygeneralsupply_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mossdepotsinitiallygeneralsupply_1.addFeatures(features_mossdepotsinitiallygeneralsupply_1);
var lyr_mossdepotsinitiallygeneralsupply_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mossdepotsinitiallygeneralsupply_1, 
                style: style_mossdepotsinitiallygeneralsupply_1,
                interactive: false,
                title: '<img src="styles/legend/mossdepotsinitiallygeneralsupply_1.png" /> moss depots (initially general supply)'
            });
var format_mossdepots_2 = new ol.format.GeoJSON();
var features_mossdepots_2 = format_mossdepots_2.readFeatures(json_mossdepots_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mossdepots_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mossdepots_2.addFeatures(features_mossdepots_2);
var lyr_mossdepots_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mossdepots_2, 
                style: style_mossdepots_2,
                interactive: false,
                title: '<img src="styles/legend/mossdepots_2.png" /> moss depots'
            });
var format_mosscollection_3 = new ol.format.GeoJSON();
var features_mosscollection_3 = format_mosscollection_3.readFeatures(json_mosscollection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mosscollection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mosscollection_3.addFeatures(features_mosscollection_3);
var lyr_mosscollection_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mosscollection_3, 
                style: style_mosscollection_3,
                interactive: false,
                title: '<img src="styles/legend/mosscollection_3.png" /> moss collection'
            });
var format_woodworksubdepotsmen_4 = new ol.format.GeoJSON();
var features_woodworksubdepotsmen_4 = format_woodworksubdepotsmen_4.readFeatures(json_woodworksubdepotsmen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_woodworksubdepotsmen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_woodworksubdepotsmen_4.addFeatures(features_woodworksubdepotsmen_4);
var lyr_woodworksubdepotsmen_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_woodworksubdepotsmen_4, 
                style: style_woodworksubdepotsmen_4,
                interactive: false,
                title: '<img src="styles/legend/woodworksubdepotsmen_4.png" /> woodwork sub-depots (men)'
            });
var format_subdepotsaffiliated_5 = new ol.format.GeoJSON();
var features_subdepotsaffiliated_5 = format_subdepotsaffiliated_5.readFeatures(json_subdepotsaffiliated_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subdepotsaffiliated_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subdepotsaffiliated_5.addFeatures(features_subdepotsaffiliated_5);
var lyr_subdepotsaffiliated_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_subdepotsaffiliated_5, 
                style: style_subdepotsaffiliated_5,
                interactive: false,
                title: '<img src="styles/legend/subdepotsaffiliated_5.png" /> sub-depots (affiliated)'
            });
var format_generalsupplydepots_6 = new ol.format.GeoJSON();
var features_generalsupplydepots_6 = format_generalsupplydepots_6.readFeatures(json_generalsupplydepots_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_generalsupplydepots_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_generalsupplydepots_6.addFeatures(features_generalsupplydepots_6);
var lyr_generalsupplydepots_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_generalsupplydepots_6, 
                style: style_generalsupplydepots_6,
                interactive: false,
                title: '<img src="styles/legend/generalsupplydepots_6.png" /> general supply depots'
            });
var format_functionnotspecified_7 = new ol.format.GeoJSON();
var features_functionnotspecified_7 = format_functionnotspecified_7.readFeatures(json_functionnotspecified_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_functionnotspecified_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_functionnotspecified_7.addFeatures(features_functionnotspecified_7);
var lyr_functionnotspecified_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_functionnotspecified_7, 
                style: style_functionnotspecified_7,
                interactive: false,
                title: '<img src="styles/legend/functionnotspecified_7.png" /> function not specified'
            });
var format_IWHSOregionaldepots_8 = new ol.format.GeoJSON();
var features_IWHSOregionaldepots_8 = format_IWHSOregionaldepots_8.readFeatures(json_IWHSOregionaldepots_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IWHSOregionaldepots_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IWHSOregionaldepots_8.addFeatures(features_IWHSOregionaldepots_8);
var lyr_IWHSOregionaldepots_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IWHSOregionaldepots_8, 
                style: style_IWHSOregionaldepots_8,
                interactive: false,
                title: '<img src="styles/legend/IWHSOregionaldepots_8.png" /> IWHSO regional depots'
            });
var format_centraldepots_9 = new ol.format.GeoJSON();
var features_centraldepots_9 = format_centraldepots_9.readFeatures(json_centraldepots_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centraldepots_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centraldepots_9.addFeatures(features_centraldepots_9);
var lyr_centraldepots_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centraldepots_9, 
                style: style_centraldepots_9,
                interactive: false,
                title: '<img src="styles/legend/centraldepots_9.png" /> central depots'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mossdepotsinitiallygeneralsupply_1.setVisible(true);lyr_mossdepots_2.setVisible(true);lyr_mosscollection_3.setVisible(true);lyr_woodworksubdepotsmen_4.setVisible(true);lyr_subdepotsaffiliated_5.setVisible(true);lyr_generalsupplydepots_6.setVisible(true);lyr_functionnotspecified_7.setVisible(true);lyr_IWHSOregionaldepots_8.setVisible(true);lyr_centraldepots_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mossdepotsinitiallygeneralsupply_1,lyr_mossdepots_2,lyr_mosscollection_3,lyr_woodworksubdepotsmen_4,lyr_subdepotsaffiliated_5,lyr_generalsupplydepots_6,lyr_functionnotspecified_7,lyr_IWHSOregionaldepots_8,lyr_centraldepots_9];
lyr_mossdepotsinitiallygeneralsupply_1.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_mossdepots_2.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_mosscollection_3.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_woodworksubdepotsmen_4.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_subdepotsaffiliated_5.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_generalsupplydepots_6.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_functionnotspecified_7.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_IWHSOregionaldepots_8.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_centraldepots_9.set('fieldAliases', {'Source': 'Source', 'Unit no.': 'Unit no.', 'Function': 'Function', 'Work party / supply depot address': 'Work party / supply depot address', 'Town': 'Town', 'Full Address': 'Full Address', 'County (ancient)': 'County (ancient)', 'County (modern)': 'County (modern)', 'Opened': 'Opened', 'Closed': 'Closed', 'Established / run by (last name)': 'Established / run by (last name)', 'First and middle names': 'First and middle names', 'Gender': 'Gender', 'Marital status': 'Marital status', 'Collaborators': 'Collaborators', });
lyr_mossdepotsinitiallygeneralsupply_1.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_mossdepots_2.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_mosscollection_3.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_woodworksubdepotsmen_4.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_subdepotsaffiliated_5.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_generalsupplydepots_6.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_functionnotspecified_7.set('fieldImages', {'Source': '', 'Unit no.': '', 'Function': '', 'Work party / supply depot address': '', 'Town': '', 'Full Address': '', 'County (ancient)': '', 'County (modern)': '', 'Opened': '', 'Closed': '', 'Established / run by (last name)': '', 'First and middle names': '', 'Gender': '', 'Marital status': '', 'Collaborators': '', });
lyr_IWHSOregionaldepots_8.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_centraldepots_9.set('fieldImages', {'Source': 'TextEdit', 'Unit no.': 'TextEdit', 'Function': 'TextEdit', 'Work party / supply depot address': 'TextEdit', 'Town': 'TextEdit', 'Full Address': 'TextEdit', 'County (ancient)': 'TextEdit', 'County (modern)': 'TextEdit', 'Opened': 'TextEdit', 'Closed': 'TextEdit', 'Established / run by (last name)': 'TextEdit', 'First and middle names': 'TextEdit', 'Gender': 'TextEdit', 'Marital status': 'TextEdit', 'Collaborators': 'TextEdit', });
lyr_mossdepotsinitiallygeneralsupply_1.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_mossdepots_2.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_mosscollection_3.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_woodworksubdepotsmen_4.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_subdepotsaffiliated_5.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_generalsupplydepots_6.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_functionnotspecified_7.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_IWHSOregionaldepots_8.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_centraldepots_9.set('fieldLabels', {'Source': 'no label', 'Unit no.': 'no label', 'Function': 'no label', 'Work party / supply depot address': 'no label', 'Town': 'no label', 'Full Address': 'no label', 'County (ancient)': 'no label', 'County (modern)': 'no label', 'Opened': 'no label', 'Closed': 'no label', 'Established / run by (last name)': 'no label', 'First and middle names': 'no label', 'Gender': 'no label', 'Marital status': 'no label', 'Collaborators': 'no label', });
lyr_centraldepots_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});