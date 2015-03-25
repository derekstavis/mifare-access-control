#!/usr/bin/gjs

const Lang = imports.lang;
const Gtk = imports.gi.Gtk;
const Gdk = imports.gi.Gdk;
const GLib = imports.gi.GLib;

const MifareAccessControl = new Lang.Class({
    Name: 'MifareAccessControl',

    _init: function() {
        this.application = new Gtk.Application();
        this.application.connect('activate', Lang.bind(this, this._onActivate));
        this.application.connect('startup', Lang.bind(this, this._onStartup));
    },

    _onActivate: function() {
        this._window.show_all();
    },

    _onStartup: function() {
        let builder = new Gtk.Builder()
          , css = new Gtk.CssProvider();

        css.load_from_path('main.css');
        builder.add_from_file('main.ui');

        Gtk.StyleContext.add_provider_for_screen(
            Gdk.Screen.get_default(), css, 0);
        
        this._window = builder.get_object('window');
        this._label_result = builder.get_object('results-value');

        var box = builder.get_object('box-options');

        var sectors = [
            {
                title: "Block 0",
                actions: [
                    {
                        title: "Read",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Write",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Increment",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Decrement",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    }
                ]
            },
            {
                title: "Block 1",
                actions: [
                    {
                        title: "Read",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Write",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Increment",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Decrement",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    }
                ]
            },
            {
                title: "Block 2",
                actions: [
                    {
                        title: "Read",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Write",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Increment",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Decrement",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    }
                ]
            },
            {
                title: "Block 3 (Sector Trailer)",
                actions: [
                    {
                        title: "Read Key A",
                        options: [
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Write Key A",
                        options: [
                            {
                                title: "Key A",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Read Access Bits",
                        options: [
                            {
                                title: "Key A/B",
                                widget: undefined
                            },
                            {
                                title: "Key A",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Write Access Bits",
                        options: [
                            {
                                title: "Key A",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Read Key B",
                        options: [
                            {
                                title: "Key A",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    },
                    {
                        title: "Write Key B",
                        options: [
                            {
                                title: "Key A",
                                widget: undefined
                            },
                            {
                                title: "Key B",
                                widget: undefined
                            },
                            {
                                title: "Never",
                                widget: undefined
                            }
                        ]
                    }
                ]
            }
        ];

        sectors.forEach(Lang.bind(this, function (sector) {
            var hbox = new Gtk.HBox(),
                title_label = new Gtk.Label({label: sector.title});

            hbox.homogeneous = true;
            title_label.set_halign(Gtk.Align.START);

            sector.actions.forEach(Lang.bind(this, function (action) {
                var title = action.title
                  , options = action.options
                  , vbox = new Gtk.VBox({margin: 10})
                  , label = new Gtk.Label({label: title})
                  , radio = undefined
                  , group = new Array();

                vbox.set_halign(Gtk.Align.START);

                label.set_halign(Gtk.Align.START);
                vbox.pack_start(label, false, false, 0);
                

                options.forEach(Lang.bind(this, function(option) {
                    if (undefined == radio) {
                        radio = new Gtk.RadioButton({label: option.title});
                    } else {
                        radio = Gtk.RadioButton.new_with_label_from_widget(
                            radio, option.title);
                    }

                    radio.connect('toggled', Lang.bind(this, this._onChange));

                    option.widget = radio;

                    vbox.pack_start(radio, false, false, 0);

                }));

                hbox.pack_start(vbox, true, true, 0);
            }));

            box.pack_start(title_label, false, false, 0);
            box.pack_start(hbox, false, false, 0);
        }));
        
        this._sectors = sectors;

        this.application.add_window(this._window);

        this._onChange();

    },

    _onChange: function(source) {
        let ac = [0x00, 0x00, 0x00];

        if (source && !source.active) return;
        
        var active = function (options) {
            var index = 0;
            options.forEach(Lang.bind(this, function(option, i) {
                if (option.widget.active) index = i;
            }));

            return index;
        };

        var sectors_actions = this._sectors.map(function(sector) {
            var option_map = sector.actions.map(function(action) {
                return active(action.options);
            });

            return option_map;
        });

        var is_same = function(array1, array2) {
            return (array1.length == array2.length) 
                && array1.every(function(element, index) {
                    return element === array2[index]; 
                });
        }

        var blocks_access_bits = sectors_actions.map(function(sector_action_map, index) {
            if (index < 3) {
                if (is_same([0, 0, 0, 0], sector_action_map)) return [0, 0, 0];
                if (is_same([0, 2, 2, 2], sector_action_map)) return [0, 1, 0];
                if (is_same([0, 1, 2, 2], sector_action_map)) return [1, 0, 0];
                if (is_same([0, 1, 1, 0], sector_action_map)) return [1, 1, 0];
                if (is_same([0, 2, 2, 0], sector_action_map)) return [0, 0, 1];
                if (is_same([1, 1, 2, 2], sector_action_map)) return [0, 1, 1];
                if (is_same([1, 2, 2, 2], sector_action_map)) return [1, 0, 1];
                if (is_same([2, 2, 2, 2], sector_action_map)) return [1, 1, 1];
            } else if (index == 3) {
                if (is_same([0, 0, 1, 2, 0, 0], sector_action_map)) return [0, 0, 0];
                if (is_same([0, 2, 1, 2, 0, 2], sector_action_map)) return [0, 1, 0];
                if (is_same([0, 1, 0, 2, 1, 1], sector_action_map)) return [1, 0, 0];
                if (is_same([0, 2, 0, 2, 1, 2], sector_action_map)) return [1, 1, 0];
                if (is_same([0, 0, 1, 0, 0, 0], sector_action_map)) return [0, 0, 1];
                if (is_same([0, 1, 0, 1, 1, 1], sector_action_map)) return [0, 1, 1];
                if (is_same([0, 2, 0, 1, 1, 2], sector_action_map)) return [1, 0, 1];
                if (is_same([0, 2, 0, 2, 1, 2], sector_action_map)) return [1, 1, 1];
            }

            return false;
        });

        if (blocks_access_bits.indexOf(false) >= 0) {
            this._label_result.set_label("XX XX XX");
            return;    
        }

        var calculate = function (sec) {
            var ac = [ 0x00, 0x00, 0x00 ];

            ac[0] |=  !sec[0][1]
            ac[0] |= (!sec[1][1]) << 1
            ac[0] |= (!sec[2][1]) << 2
            ac[0] |= (!sec[3][1]) << 3

            ac[0] |= (!sec[0][2]) << 4
            ac[0] |= (!sec[1][2]) << 5
            ac[0] |= (!sec[2][2]) << 6
            ac[0] |= (!sec[3][2]) << 7

            ac[1] |=  !sec[0][3]
            ac[1] |= (!sec[1][3]) << 1
            ac[1] |= (!sec[2][3]) << 2
            ac[1] |= (!sec[3][3]) << 3

            ac[1] |= sec[0][1] << 4
            ac[1] |= sec[1][1] << 5
            ac[1] |= sec[2][1] << 6
            ac[1] |= sec[3][1] << 7

            ac[2] |= sec[0][2]
            ac[2] |= sec[1][2] << 1
            ac[2] |= sec[2][2] << 2
            ac[2] |= sec[3][2] << 3

            ac[2] |= sec[0][3] << 4
            ac[2] |= sec[1][3] << 5
            ac[2] |= sec[2][3] << 6
            ac[2] |= sec[3][3] << 7

            return ac;
        }

        var text = calculate(blocks_access_bits).map(function (e) {
            var hex = e.toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        }).join(" ").toUpperCase();

        this._label_result.set_label(text);
        
    }
});

let app = new MifareAccessControl();
app.application.run(ARGV);