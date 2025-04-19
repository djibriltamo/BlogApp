<?php

namespace App\Http\Controllers;

use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TempImageController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image',
        ]);

        if($validator->fails())
        {
            return response()->json([
               'status' => false,
               'message' => 'Error encoutered',
               'errors' => $validator->errors()
            ]);
        }

        //Upload the image here
        $image = $request->image;
        $extension = $image->getClientOriginalExtension();
        $imageName = time().'.'.$extension;

        //Store the image information in the database
        $tempImage = new TempImage();
        $tempImage->name = $imageName;
        $tempImage->save();

        //Save image in temp folder
        $image->move(public_path('uploads/temp'), $imageName);
        return response()->json([
            'status' => 200,
            'message' => 'Image Uploaded Successfully',
            'image' => $tempImage
         ]);

    }
}
