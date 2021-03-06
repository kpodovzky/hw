/*
 * hw.js - formats/odt.js
 *
 * A homework toolkit for hackers
 * Copyright (C) 2016 Alyssa Rosenzweig

 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Electronic Mail Address:
 * alyssa@rosenzweig.io
 *
 */

var exec = require("child_process").exec;
var config = require(process.cwd() + "/config.js");

var chopExtension = require("../chopExtension.js");

module.exports.extension = "odt";

/* odt is a complex format and out of scope in hw
 * LibreOffice integration is limited to publishing,
 * and is just here for consistency.
 * Document creation must be done from LibreOffice+git yourself ATM
 * TODO: look into workarounds
 */

module.exports.defaultText = function(name, cls) {
    console.error("LibreOffice documents must be created manually");
    console.error("Save your document into your hw path, and enter: ");
    console.error("$ git add [doc.odt] && git commit -a -m 'New doc'");
    process.exit(1);
}

/* To generate pdf's, we open a headless libreoffice instance,
 * passing off the work of rendering complex documents.
 */

module.exports.print = function(file) {
    exec("soffice --headless --convert-to pdf " + file);
}
