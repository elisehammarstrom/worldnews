console.log("new file");

function randomizeSort() {
					sortArray.sort(function(a, b) {
						sorted = 0.5 - Math.random();
						return sorted;

					});
				}

				randomizeSort();

				var container = document.getElementById('container');
				var i= 0;
				while (i<3 ){
					// container.innerHTML += '<div id="third">' + sortArray[i].webTitle + '</div>';
					var d = new Date(sortArray[i].webPublicationDate);
					d.getHours();
					d.getMinutes();
					var month = d.getMonth()+1;
					d.getDate();
					d.getFullYear();
					container.innerHTML += '<div id="third">' + sortArray[i].webTitle + '<p id="date_time">' + d.getHours() + ':' + d.getMinutes()+ '<br>' + d.getFullYear() + '-' + month + '-' + d.getDate() + '</p>' + '</div>';
					i++;
				}

