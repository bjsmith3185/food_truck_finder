var fetchUrl = require("fetch").fetchUrl;


module.exports = function yelpApi(input) {
    var options = {
        headers: {
            "authorization": process.env.YELP_API_TOKEN
        }
    }
    return new Promise((resolve, reject) => {
        // yelp api call
        fetchUrl(`https://api.yelp.com/v3/businesses/search?term=${input}&location=charlotte_nc`, options, function (error, meta, body) {
            var obj = JSON.parse(body);
            console.log("OBJ first call ",obj.businesses[0].location);
            var result = obj.businesses[0];
            var id = result.id; // used to get the reviews from the yelp in the API call below for business reviews
            var company = result.name;
            var foodPicture = result.image_url;
            var address = result.location.address1;
            var category = result.categories[0].title;
            var overallRating = result.rating;
            var price = result.price;
            var phone = result.display_phone;

            fetchUrl(`https://api.yelp.com/v3/businesses/${id}/reviews`, options, function (error, meta, body) {
                var obj = JSON.parse(body);
            console.log("OBJ",obj);

                var review_1_text = obj.reviews[0].text;
                var review_1_rating = obj.reviews[0].rating;
                var review_1_time = obj.reviews[0].time_created;
                var review_1_author = obj.reviews[0].user.name;
                var review_1_image = obj.reviews[0].user.image_url;
                var review_1_url = obj.reviews[0].url;

                

                var review_2_text = obj.reviews[1].text;
                var review_2_rating = obj.reviews[1].rating;
                var review_2_time = obj.reviews[1].time_created;
                var review_2_author = obj.reviews[1].user.name;
                var review_2_image = obj.reviews[1].user.image_url;
                var review_2_url = obj.reviews[1].url;


                

                var review_3_text = obj.reviews[2].text;
                var review_3_rating = obj.reviews[2].rating;
                var review_3_time = obj.reviews[2].time_created;
                var review_3_author = obj.reviews[2].user.name;
                var review_3_image = obj.reviews[2].user.image_url;
                var review_3_url = obj.reviews[2].url;


                


                //             console.log(`

                //     yelpID: ${id},
                //     company name: ${company},
                //     food pic: ${foodPicture},
                //     category: ${category},
                //     overall rating: ${overallRating},
                //     price: ${price},
                //     phone: ${phone},

                //     REVIEW NUMBER 1.
                //         REVIEW: ${review_1_text}
                //         RATING BY USER: ${review_1_rating}
                //         TIME: ${review_1_time}
                //         USER INFO: ${review_1_author}

                //     REVIEW NUMBER 2.
                //         REVIEW: ${review_2_text}
                //         RATING BY USER: ${review_2_rating}
                //         TIME: ${review_2_time}
                //         USER INFO: ${review_2_author}

                //     REVIEW NUMBER 3.
                //         REVIEW: ${review_3_text}
                //         RATING BY USER: ${review_3_rating}
                //         TIME: ${review_3_time}
                //         USER INFO: ${review_3_author}

                //   `)
                
                // objects with API results exported to yelp-api-routes.js
                yelpTruckResult = {
                    yelpID: id,
                    address: address,
                    image_url: foodPicture,
                    rating: overallRating,
                    price: price,
                    phone: phone,

                    reviewText: [review_1_text,review_2_text,review_3_text],
                    reviewRating: [review_1_rating,review_2_rating,review_3_rating],
                    reviewTime: [review_1_time,review_2_time,review_3_time],
                    reviewAuthor: [review_1_author,review_2_author,review_3_author],
                    reviewImage:[review_1_image,review_2_image,review_3_image],
                    reviewUrl:[review_1_url,review_2_url,review_3_url]
                }
                resolve(yelpTruckResult);
            });
        });
    });
};
