export interface User {
    id?: number;        // Optional: json-server auto-generates
    name: string;
    age: number;
    gender: "Male" | "Female" | "Other";  // Strict union type!
    dob: string;        // YYYY-MM-DD
    hobbies: string;
}

// For creating new user (no id)
export type CreateUser = Omit<User, 'id'>;

// For API responses
export type UserResponse = User[];