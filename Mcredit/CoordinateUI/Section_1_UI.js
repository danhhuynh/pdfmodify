import {
    education_status,
    marital_status,
    type_of_living,
} from "../coordinate/Section1.js";

export default function genArrPoint(data) {
    return [{
            text: data["name"],
            x: 135,
            y: 111 + 26,
        },
        {
            text: data["date_of_birth"],
            x: 135,
            y: 126 + 26,
        },

        //Line 3
        data["gender"] === "Female" ?
        {
            text: "X",
            x: 446,
            y: 127 + 26,
        } :
        {
            text: "X",

            x: 391,
            y: 127 + 26,
        },

        //Line 4
        {
            text: "X",
            x: marital_status[data["marital_status"]],
            y: 143 + 26,
        },

        // Line 5

        {
            text: "X",
            x: education_status[data["education_status"]] || 127 - 3,
            y: 159 + 26,
        },

        // Line 6
        {
            text: data["cccd"],
            x: 200,
            y: 171 + 26,
        },
        // Line 7
        {
            text: data["phone"],
            x: 140,
            y: 186 + 26,
        },
        //line 8
        {
            text: data["email"],
            x: 360,
            y: 186 + 26,
        },
        //line 9
        {
            text: data["type_of_residence_address"] === "Giống với địa chỉ nơi ở hiện tại" ? data["detail_current_address"] : data["detail_residence_address"],
            x: 170,
            y: 203 + 26,
        },
        {
            text: data["type_of_residence_address"] === "Giống với địa chỉ nơi ở hiện tại" ? 
               ( data["current_ward"] +
                " " +
                data["current_district"] +
                " " +
                data["current_city"]) : (data["residence_ward"] +
                " " +
                data["residence_district"] +
                " " +
                data["residence_city"]),
            x: 90,
            y: 218 + 26,
        },

        //line 10
        data["type_of_residence_address"] === "Giống với địa chỉ nơi ở hiện tại" ?
        {
            text: "X",
            x: 164 - 5,
            y: 235 + 26,
        } :
        {
            text: "X",
            x: 313 - 5,
            y: 235 + 26,
        },
        {
            text: data["detail_current_address"] +
                " " +
                data["current_ward"] +
                " " +
                data["current_district"] +
                " " +
                data["current_city"],
            x: 90,
            y: 248 + 26,
        },
        //Line 11
        {
            text: data["year_living"],
            x: 263 - 5,
            y: 264 + 26,
        },
        {
            text: data["month_living"],
            x: 304 - 5,
            y: 264 + 26,
        },

        //Line 12
        {
            text: "X",
            x: type_of_living[data["type_of_living"]],
            y: 280 + 26,
        },
    ];
}
