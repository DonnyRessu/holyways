package usersdto

type UpdateUserRequest struct {
	Fullname string `json:"fullname" form:"fullname"`
	Email    string `json:"email" form:"email"`
	Image    string `json:"image" form:"image"`
	Adress   string `json:"address" form:"address"`
	Phone    string   `json:"phone" form:"phone"`
}
