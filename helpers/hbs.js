const moment = require('moment')

module.exports = {
    formatDate: function (date, format) {
        return moment(date).utc().format(format)
    },
    // editIcon: function (dreamsUser, loggedUser, dreamsId, floating = true) {
    //     if (dreamsUser._id.toString() == loggedUser._id.toString()) {
    //         if (floating) {
    //             return `<a href="/stories/edit/${dreamsId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
    //         } else {
    //             return `<a href="/stories/edit/${dreamsId}"><i class="fas fa-edit"></i></a>`
    //         }
    //     } else {
    //         return ''
    //     }
    // },

    select: function (selected, options) {
        return options
            .fn(this)
            .replace(
                new RegExp(' value="' + selected + '"'),
                '$& selected="selected"'
            )
            .replace(
                new RegExp('>' + selected + '</option>'),
                ' selected="selected"$&'
            )
    },
}