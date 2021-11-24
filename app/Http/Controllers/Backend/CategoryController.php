<?php

namespace App\Http\Controllers\backend;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\Category;
use Validator;

use Illuminate\Http\Request;


class CategoryController extends Controller
{

    //----------------- category index -----------------------\\

    public function index()
    {
        $categories = Category::latest()->get();

        return response()->json($categories, 200);
    }

    //----------------- category store -----------------------\\

    public function store(Request $request)
    {

        // dd($request->all());

        $this->validate($request, [

         'name' =>  'required',

        ]);

        $category = Category::create([

            'name' =>  $request->name,
            'slug' =>  Str::slug($request->name),
        ]);


        if($request->hasFile('image')){

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $category->image = '/storage/images/' . $image_new_name;
            $category->save();
        }

      return response()->json($category, 200);

    }



    //----------------- category update -----------------------\\

    public function update(Request $request, $id)
    {
        // dd($request->all());

        $category = Category::find($id);

        $this->validate($request, [
            'name' => "required|unique:categories,name, $category->id"
        ]);

        $category->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);


        if($request->hasFile('image')){

            $categoryImage = $category->image;
            $imagePath = public_path($categoryImage);

            if ($categoryImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $category->image = '/storage/images/' . $image_new_name;
            $category->save();
        }

        return response()->json('success', 200);
    }


    //----------------- category destroy -----------------------\\

    public function destroy($id)
    {
        $category = Category::find($id);

        if ($category) {
            $categoryImage = $category->image;
            $imagePath = public_path($categoryImage);

            if ($categoryImage && file_exists($imagePath)) {
                unlink($imagePath);
            }
            $category->delete();

        }

        return response()->json('success', 200);

    }


}

